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
    let tenDaysAgo = userCalendar.date(byAdding: .day, value: -10, to: getStartOfDay())!
    return tenDaysAgo
  }
 
  let stepType = HKQuantityType.quantityType(forIdentifier: .stepCount)!
  
  
  
  
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
  
  @objc
  func RNTenDayStepCount(_ getHKTenDayTotSteps: @escaping RCTResponseSenderBlock) {
    DispatchQueue.main.async {
      let predicate = HKQuery.predicateForSamples(
        withStart: self.getTenDaysBefore(),
        end: self.getCurrentDay(),
        options:.strictStartDate)
      let query = HKStatisticsQuery(quantityType: self.stepType,
                                  quantitySamplePredicate: predicate,
                                  options: .cumulativeSum) { _, result, error in
        guard let result = result, let sum = result.sumQuantity() else {
          getHKTenDayTotSteps([])
          print("Error in fetching steps count with error:\(error?.localizedDescription ?? "UnknownError")")
          return
        }
        let steps = sum.doubleValue(for: HKUnit.count())
        print("In RNTenDayStepCount with steps: \(steps)")
        getHKTenDayTotSteps([steps])
      }
        self.healthStore.execute(query)
    }
  }
  
  // Fetch 10 days of step data from Health kit
  func fetchDailyStepCount(_ tenDayCompletion: @escaping RCTResponseSenderBlock) {
    let predicate = HKQuery.predicateForSamples(
      withStart: getTenDaysBefore(),
      end: getCurrentDay(),
      options:.strictStartDate)
    var stepsHolder = [String]()
    let query = HKStatisticsCollectionQuery(quantityType: stepType,
                                            quantitySamplePredicate: predicate,
                                            options: [.cumulativeSum, .separateBySource],
                                            anchorDate: getStartOfDay(),
                                            intervalComponents: DateComponents(day: 1))
    query.initialResultsHandler = { query, results, error in
      guard let statsCollection = results else {
        // Perform proper error handling here...
        return
      }
      for source in (statsCollection.sources()) {
        results?.enumerateStatistics(from: self.getTenDaysBefore(), to: self.getCurrentDay(), with: { (result, _) in
          stepsHolder.append("\(result.startDate) = \(result.sumQuantity(for: source)?.doubleValue(for: HKUnit.count()) ?? 0)")
        })
      }
        tenDayCompletion([stepsHolder])
    }
    healthStore.execute(query)
  }
    
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
}
