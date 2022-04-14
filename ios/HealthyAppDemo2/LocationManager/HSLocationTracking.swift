import Foundation
import CoreLocation
import UIKit



@objc class HSLocationTracking: NSObject {

    //Constant
    static let timeInternal = 160
    static let accuracy = kCLLocationAccuracyKilometer
    var manager: HSLocationManager!
    var statusCheckedOnce = false
    private static var privateShared : HSLocationTracking?

    override init() {
        super.init()
        manager = HSLocationManager(delegate: self)
    }

    class func shared() -> HSLocationTracking {
        guard let uwShared = privateShared else {
            privateShared = HSLocationTracking()
            return privateShared!
        }
        return uwShared
    }

    class func destroy() {
        privateShared = nil
    }

    @objc func startLocationTracking() {
        if CLLocationManager.authorizationStatus() == .authorizedAlways {
            manager.startUpdatingLocation(interval: 160, acceptableLocationAccuracy: kCLLocationAccuracyKilometer)
        } else if CLLocationManager.authorizationStatus() == .denied  ||
          CLLocationManager.authorizationStatus() == .authorizedWhenInUse  ||
          CLLocationManager.authorizationStatus() == .notDetermined ||
          CLLocationManager.authorizationStatus() == .restricted {
        } else {
          manager.requestAlwaysAuthorization()
        }
    }

    @objc func stopLocationTracking() {
        manager.stopUpdatingLocation()
    }
}

extension HSLocationTracking:HSLocationManagerDelegate {

    func scheduledLocationManager(_ manager: HSLocationManager, didUpdateLocations locations: [CLLocation]) {
      let recentLocation = locations.last!
      let latlngDescription = (recentLocation.coordinate.latitude.description + ", " + recentLocation.coordinate.longitude.description)
      // TODO: handle location update
    }

    func scheduledLocationManager(_ manager: HSLocationManager, didFailWithError error: Error) {
      // TODO: handle error
    }

    func scheduledLocationManager(_ manager: HSLocationManager, didChangeAuthorization status: CLAuthorizationStatus) {
        if CLLocationManager.authorizationStatus() == .denied ||
          CLLocationManager.authorizationStatus() == .authorizedWhenInUse  ||
          CLLocationManager.authorizationStatus() == .notDetermined ||
          CLLocationManager.authorizationStatus() == .restricted {
        } else {
            startLocationTracking()
        }
    }
}
