//
//  HealthKitManager.swift
//  HealthyAppDemo2
//
//  Created by Jay Dev on 3/28/22.
//

import Foundation
import HealthKit


@objc(HealthKitManager)
class HealthKitManager: NSObject {
  // declares HealthKit store for the project
  let healthStore = HKHealthStore()
  
  // function method to request authorization from Healthkit
  @objc
  func requestAuthorization() {
    let typesToShare: Set = [
      HKQuantityType.quantityType(forIdentifier: HKQuantityTypeIdentifier.stepCount)!
    ]
    let typesToRead: Set = [
      HKQuantityType.quantityType(forIdentifier: HKQuantityTypeIdentifier.stepCount)!
    ]
    // request authorization for those quantity types.
    healthStore.requestAuthorization(toShare: typesToShare, read: typesToRead) {(success, error) in
    }
  }
  
  @objc
  func getCurrentDay() -> Date {
    let now = Date()
    print(now)
    return now
  }
  
  @objc
  func getStartOfDay() -> Date {
    let now = Date()
    return Calendar.current.startOfDay(for: now)
  }
  
  @objc
  func getTenDaysBefore() -> Date {
    let userCalendar = Calendar.current
    let tenDaysAgo = userCalendar.date(byAdding: .day, value: -10, to: Date())!
    return tenDaysAgo
  }
 
  let stepType = HKQuantityType.quantityType(forIdentifier: .stepCount)!
  
  
  
  
//  @objc
//  func RNCurrentStepCount(_ callback: @escaping RCTResponseSenderBlock) {
//    let defaultValue: Int = 42
//    DispatchQueue.main.async {
//      let predicate = HKQuery.predicateForSamples(
//        withStart: self.getStartOfDay(),
//        end: self.getCurrentDay(),
//        options:.strictStartDate)
//      let query = HKStatisticsQuery(quantityType: self.stepType,
//                                  quantitySamplePredicate: predicate,
//                                  options: .cumulativeSum) { _, result, error in
//        guard let result = result, let sum = result.sumQuantity() else {
//          callback([defaultValue])
//          print("Error in fetching steps count with error:\(error?.localizedDescription ?? "UnknownError")")
//          return
//        }
//        let steps = sum.doubleValue(for: HKUnit.count())
//        print("In RNCurrentStepCount with steps")
//        callback([steps])
//      }
//        self.healthStore.execute(query)
//    }
//  }
  
  @objc
  func RNCurrentStepCount() {
    print("Current date and time is \(getCurrentDay())")
    print("Ten days ago is \(getTenDaysBefore())")
  }
    
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
}
