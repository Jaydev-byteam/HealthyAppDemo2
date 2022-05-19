//
//  AppDelegate+SwiftExtension.swift
//  HealthyAppDemo2
//
//  Created by Jay Dev on 5/17/22.
//

import Foundation
import CoreLocation

extension AppDelegate {
  @objc func observeLocation() {
        if (CLLocationManager.authorizationStatus() == CLAuthorizationStatus.authorizedAlways) {
          HSLocationTracking.shared().startLocationTracking()
        }
    }

  @objc func stopObservingLocation() {
        HSLocationTracking.shared().stopLocationTracking()
      }
}
