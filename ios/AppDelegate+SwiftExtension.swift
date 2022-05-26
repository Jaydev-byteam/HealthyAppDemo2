//
//  AppDelegate+SwiftExtension.swift
//  HealthyAppDemo2
//
//  Created by Jay Dev on 5/17/22.
//

import Foundation
import CoreLocation
import UserNotifications

extension AppDelegate {
  @objc func observeLocation() {
        if (CLLocationManager.authorizationStatus() == CLAuthorizationStatus.authorizedAlways) {
          HSLocationTracking.shared().startLocationTracking()
        }
    }

  @objc func stopObservingLocation() {
        HSLocationTracking.shared().stopLocationTracking()
      }
  
  // notification method calling at force kill app from background
     @objc func appTerminatedNotification() {
      let content = UNMutableNotificationContent()
      content.title = NSString.localizedUserNotificationString(forKey: "Paused!", arguments: nil)
      content.body = NSString
        .localizedUserNotificationString(
          forKey: "Oops! 😳 Do not force quit BetterHealth if you want to continue logging your progress! Tap here to resume."
          , arguments: nil)
      content.sound = UNNotificationSound.default
      content.categoryIdentifier = "notify-terminated"
      let trigger = UNTimeIntervalNotificationTrigger.init(timeInterval: 1, repeats: false)
      let request = UNNotificationRequest.init(identifier: "notify-terminated", content: content, trigger: trigger)
      let center = UNUserNotificationCenter.current()
      center.add(request)
    }
  
  @objc func registerForPushNotifications() {
    //1
    UNUserNotificationCenter.current()
      .requestAuthorization(
          options: [.alert, .sound, .badge]) { [weak self] granted, _ in
          print("Permission granted: \(granted)")
          guard granted else { return }
          self?.getNotificationSettings()
        }
  }
  
  @objc func getNotificationSettings() {
    UNUserNotificationCenter.current().getNotificationSettings { settings in
      print("Notification settings: \(settings)")
    }
  }
  
 }
