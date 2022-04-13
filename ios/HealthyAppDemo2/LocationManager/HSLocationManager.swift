import Foundation
import CoreLocation
import UIKit

public protocol HSLocationManagerDelegate: class {

    func scheduledLocationManager(_ manager: HSLocationManager, didFailWithError error: Error)
    func scheduledLocationManager(_ manager: HSLocationManager, didUpdateLocations locations: [CLLocation])
    func scheduledLocationManager(_ manager: HSLocationManager, didChangeAuthorization status: CLAuthorizationStatus)
}

public class HSLocationManager: NSObject, CLLocationManagerDelegate {

    private let maxBGTime: TimeInterval = 175
    private let minBGTime: TimeInterval = 2
    private let minAcceptableLocationAccuracy: CLLocationAccuracy = kCLLocationAccuracyThreeKilometers
    private let waitForLocationsTime: TimeInterval = 5

    private weak var delegate: HSLocationManagerDelegate?
    private let manager = CLLocationManager()

    private var isManagerRunning = false
    private var checkLocationTimer: Timer?
    private var waitTimer: Timer?
    private var bgLocTask: UIBackgroundTaskIdentifier = UIBackgroundTaskIdentifier.invalid
    private var lastLocations = [CLLocation]()

    public private(set) var acceptableLocationAccuracy: CLLocationAccuracy = kCLLocationAccuracyKilometer
    public private(set) var checkLocationInterval: TimeInterval = 10
    public private(set) var isRunning = false

    public init(delegate: HSLocationManagerDelegate) {
        self.delegate = delegate
        super.init()
        configureLocationManager()
    }

    private func configureLocationManager() {
        manager.allowsBackgroundLocationUpdates = true
        manager.pausesLocationUpdatesAutomatically = false
        manager.activityType = CLActivityType.fitness
        manager.delegate = self
    }

    public func requestAlwaysAuthorization() {
        manager.requestAlwaysAuthorization()
    }

    public func locationManagerDidPauseLocationUpdates(_ manager: CLLocationManager) {
        stopUpdatingLocation()
    }

    public func startUpdatingLocation(
      interval: TimeInterval,
      acceptableLocationAccuracy: CLLocationAccuracy = kCLLocationAccuracyKilometer) {

        if isRunning {
            stopUpdatingLocation()
        }

        checkLocationInterval -= waitForLocationsTime
        checkLocationInterval = interval > maxBGTime ? maxBGTime : interval
        checkLocationInterval = interval < minBGTime ? minBGTime : interval

        self.acceptableLocationAccuracy =
          acceptableLocationAccuracy < minAcceptableLocationAccuracy ? minAcceptableLocationAccuracy
          : acceptableLocationAccuracy

        isRunning = true
        print("location service started")
        addNotifications()
        startLocationManager()
   }

    public func stopUpdatingLocation() {
        isRunning = false
        print("location service stopped")
        stopWaitTimer()
        stopLocationManager()
        stopBackgroundTask()
        stopCheckLocationTimer()
        removeNotifications()
    }

    private func addNotifications() {
      removeNotifications()
      NotificationCenter.default.addObserver(self, selector:  #selector(applicationDidEnterBackground),
                                             name: UIApplication.didEnterBackgroundNotification,
                                             object: nil)
      NotificationCenter.default.addObserver(self, selector:  #selector(applicationDidBecomeActive),
                                             name: UIApplication.didBecomeActiveNotification,
                                             object: nil)
    }

    private func removeNotifications() {
      NotificationCenter.default.removeObserver(self)
    }

    private func startLocationManager() {
        isManagerRunning = true
        manager.desiredAccuracy = kCLLocationAccuracyThreeKilometers
        manager.distanceFilter = 1000
        manager.startUpdatingLocation()
    }

    private func pauseLocationManager() {
        manager.desiredAccuracy = kCLLocationAccuracyThreeKilometers
        manager.distanceFilter = 99999
    }
    private func stopLocationManager() {
        isManagerRunning = false
        manager.stopUpdatingLocation()
    }

    @objc func applicationDidEnterBackground() {
        stopBackgroundTask()
        startBackgroundTask()
    }

    @objc func applicationDidBecomeActive() {
        stopBackgroundTask()
    }

  // MARK: - location manager delagate methods
    public func locationManager(_ manager: CLLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
      delegate?.scheduledLocationManager(self, didChangeAuthorization: status)
    }

    public func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        delegate?.scheduledLocationManager(self, didFailWithError: error)
    }

    public func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard isManagerRunning else { return }
        guard !locations.isEmpty else { return }
        lastLocations = locations
        if waitTimer == nil {
            startWaitTimer()
        }
    }

  //---------------------------------------------------------------------------------------------------------------//
  // MARK: - Timer and Background Task
    private func startCheckLocationTimer() {
        stopCheckLocationTimer()
        checkLocationTimer = Timer.scheduledTimer(
          timeInterval: checkLocationInterval,
          target: self,
          selector: #selector(checkLocationTimerEvent),
          userInfo: nil,
          repeats: false)
    }

    private func stopCheckLocationTimer() {
        if let timer = checkLocationTimer {
            timer.invalidate()
            checkLocationTimer=nil
        }
    }

    @objc func checkLocationTimerEvent() {
        stopCheckLocationTimer()
        startLocationManager()
        // starting from iOS 7 and above stop background task with delay, otherwise location service won't start
        self.perform(#selector(stopAndResetBgTaskIfNeeded), with: nil, afterDelay: 1)
    }

    private func startWaitTimer() {
        stopWaitTimer()
        waitTimer = Timer.scheduledTimer(
          timeInterval: waitForLocationsTime,
          target: self,
          selector: #selector(waitTimerEvent),
          userInfo: nil,
          repeats: false)
    }

    private func stopWaitTimer() {
        if let timer = waitTimer {
            timer.invalidate()
            waitTimer=nil
        }
    }

    @objc func waitTimerEvent() {
        stopWaitTimer()
        if acceptableLocationAccuracyRetrieved() {
            startBackgroundTask()
            startCheckLocationTimer()
            pauseLocationManager()
            delegate?.scheduledLocationManager(self, didUpdateLocations: lastLocations)
        } else {
            startWaitTimer()
        }
    }

    private func acceptableLocationAccuracyRetrieved() -> Bool {
      guard let location = lastLocations.last else {
        return false
      }
        return location.horizontalAccuracy <= acceptableLocationAccuracy ? true : false
    }

    @objc func stopAndResetBgTaskIfNeeded() {
        if isManagerRunning {
            stopBackgroundTask()
        } else {
            stopBackgroundTask()
            startBackgroundTask()
        }
    }

    private func startBackgroundTask() {
        let state = UIApplication.shared.applicationState
        if ((state == .background || state == .inactive) && bgLocTask == UIBackgroundTaskIdentifier.invalid) {
            bgLocTask = UIApplication.shared.beginBackgroundTask(expirationHandler: {
                self.checkLocationTimerEvent()
            })
        }
    }

    @objc private func stopBackgroundTask() {
        guard bgLocTask != UIBackgroundTaskIdentifier.invalid else { return }
        UIApplication.shared.endBackgroundTask(bgLocTask)
        bgLocTask = UIBackgroundTaskIdentifier.invalid
    }

  //-----------------------------------------------------------------------------------------------------------------//
}
