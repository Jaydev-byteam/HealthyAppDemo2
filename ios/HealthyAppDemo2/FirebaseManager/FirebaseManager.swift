//
//  FirebaseManager.swift
//  HealthyAppDemo2
//
//  Created by Jay Dev on 4/13/22.
//

import Foundation
import Firebase
import UIKit



@objc class FirebaseManager: NSObject {
  

  func timeStamp() -> String {
    let dateString = Date().iso8601 //  "2018-11-21T03:04:13.959Z"
      return dateString
    }
    // unix timestamp
  func timeStampUnix() -> Int64 {
      let dateInt = Int64(Date().timeIntervalSince1970 * 1000) //  201823784597293 - including milliseconds
      return dateInt
    }
  
  @objc func addPickup(_ eventType: String) {
     print("Adding Pickup Document!")
     if let currentUserId = Auth.auth().currentUser?.uid {
       // new realtime pickups
       let pickupDic = [
         "iso_time": "\(timeStamp())",
         "unix_time": timeStampUnix(),
         "type": eventType
       ] as [String : Any]
       Database.database().reference().child("pickups").child(currentUserId).childByAutoId().setValue(pickupDic)
     }
   }

}

extension Date {
  var iso8601: String {
    return Formatter.Date.iso8601.string(from: self)
  }
}

extension ISO8601DateFormatter {
  convenience init(_ formatOptions: Options, timeZone: TimeZone? = nil) {
    self.init()
    self.formatOptions = formatOptions
    self.timeZone = timeZone ?? TimeZone(secondsFromGMT: 0)
  }
}

extension Formatter {
  struct Date {
    static let iso8601 = ISO8601DateFormatter([.withInternetDateTime], timeZone: TimeZone.current)
  }
}
