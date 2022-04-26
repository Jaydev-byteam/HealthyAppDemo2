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
  
  @objc func openApplicationSettings() {
    guard let settingsUrl = URL(string: UIApplication.openSettingsURLString) else {
     return
    }
    DispatchQueue.main.async {
     if UIApplication.shared.canOpenURL(settingsUrl) {
      UIApplication.shared.open(settingsUrl, completionHandler: { (_) in
      })
     }
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
    let tenDaysAgo = userCalendar.date(byAdding: .day, value: -10, to: getStartOfDay())!
    return tenDaysAgo
  }
 
  let stepType = HKQuantityType.quantityType(forIdentifier: .stepCount)!
  
  // function to grab the current day step total and pass to React Native app
  @objc
  func RNCurrentStepCount(_ getHKCurrDaySteps: @escaping RCTResponseSenderBlock) {
    DispatchQueue.main.async {
      let predicate = HKQuery.predicateForSamples(
        withStart: self.getStartOfDay(),
        end: self.getCurrentDay(),
        options:.strictStartDate)
      let query = HKStatisticsQuery(quantityType: self.stepType,
                                  quantitySamplePredicate: predicate,
                                  options: .cumulativeSum) { _, result, error in
        guard let result = result, let sum = result.sumQuantity() else {
          getHKCurrDaySteps([])
          print("Error in fetching steps count with error:\(error?.localizedDescription ?? "UnknownError")")
          return
        }
        let steps = sum.doubleValue(for: HKUnit.count())
        print("In RNCurrentStepCount with steps: \(steps)")
        getHKCurrDaySteps([steps])
      }
        self.healthStore.execute(query)
    }
  }
  
  // function to grab array of last ten days step counts and pass to React Native app
  @objc
  func RNTenDayStepCount(_ getHKTenDayTotSteps: @escaping RCTResponseSenderBlock) {
    DispatchQueue.main.async {
      let predicate = HKQuery.predicateForSamples(
        withStart: self.getTenDaysBefore(),
        end: self.getCurrentDay(),
        options: .strictStartDate)
      var stepsHolder = [String]()
      let query = HKStatisticsCollectionQuery(quantityType: self.stepType,
                                              quantitySamplePredicate: predicate,
                                              options: [.cumulativeSum, .separateBySource],
                                              anchorDate: self.getStartOfDay(),
                                              intervalComponents: DateComponents(day: 1))
      query.initialResultsHandler = { query, results, error in
        guard let statsCollection = results else {
          // Perform proper error handling here...
          getHKTenDayTotSteps([])
          print("Error in fetching ten day step array with error:\(error?.localizedDescription ?? "UnknownError")")
          return
        }
        dump(statsCollection)
        for source in (statsCollection.sources()) {
          print("in RNTDSC, source is:")
          print(source.name)
          results?.enumerateStatistics(from: self.getTenDaysBefore(), to: self.getCurrentDay(), with: { (result, _) in
            stepsHolder.append("\(result.startDate) = \(result.sumQuantity(for: source)?.doubleValue(for: HKUnit.count()) ?? 0)")
          })
        }
          print("in RNTenDayStepCount, stepsHolder is:")
          print(stepsHolder)
          getHKTenDayTotSteps([stepsHolder])
      }
      self.healthStore.execute(query)
    }
    
  }
  
  
//  @objc
//  func RNTenDayStepCount(_ getHKTenDayTotSteps: @escaping RCTResponseSenderBlock) {
//    DispatchQueue.main.async {
//      let predicate = HKQuery.predicateForSamples(
//        withStart: self.getTenDaysBefore(),
//        end: self.getCurrentDay(),
//        options:.strictStartDate)
//      var stepsHolder = [String]()
//      let query = HKStatisticsCollectionQuery(quantityType: self.stepType,
//                                  quantitySamplePredicate: predicate,
//                                              options: [.cumulativeSum, .separateBySource],
//                                              anchorDate: self.getStartOfDay(),
//                                              intervalComponents: DateComponents(day: 1))
//      query.initialResultsHandler = { query, results, error in
//        guard let statsCollection = results else {
//          getHKTenDayTotSteps([])
//          print("Error in fetching ten day step array with error:\(error?.localizedDescription ?? "UnknownError")")
//          return
//        }
//        for source in (statsCollection.sources()) {
//          results?.enumerateStatistics(from: self.getTenDaysBefore(), to: self.getCurrentDay(), with: { (result, _) in
//            stepsHolder.append("\(result.startDate) = \(result.sumQuantity(for: source)?.doubleValue(for: HKUnit.count()) ?? 0)")
//          })
//        }
//        getHKTenDayTotSteps([stepsHolder])
//      }
//      self.healthStore.execute(query)
//    }
//  }
  
  // Fetch 10 days of step data from Health kit
  
  
//  @objc
//    func RNTenDayStepCount(_ tenDayCompletion: @escaping RCTResponseSenderBlock) {
//      DispatchQueue.main.async {
//        let predicate = HKQuery.predicateForSamples(
//          withStart: self.getTenDaysBefore(),
//          end: self.getCurrentDay(),
//          options:.strictStartDate)
//        let query = HKStatisticsQuery(quantityType: self.stepType,
//                                    quantitySamplePredicate: predicate,
//                                    options: .cumulativeSum) { _, result, error in
//          guard let result = result, let sum = result.sumQuantity() else {
//            tenDayCompletion([])
//            print("Error in fetching steps count with error:\(error?.localizedDescription ?? "UnknownError")")
//            return
//          }
//          let steps = sum.doubleValue(for: HKUnit.count())
//          print("In RNTenDayStepCount with steps: \(steps)")
//          tenDayCompletion([steps])
//        }
//          self.healthStore.execute(query)
//      }
//    }
    
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
}
