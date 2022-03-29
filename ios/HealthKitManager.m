//
//  HealthKitManager.m
//  HealthyAppDemo2
//
//  Created by Jay Dev on 3/28/22.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"

// exports HealthKitManager class in Controller.swift
@interface RCT_EXTERN_MODULE(HealthKitManager, NSObject)

// exports requestAuthorization method in the class
RCT_EXTERN_METHOD(requestAuthorization)

// export step method
RCT_EXTERN_METHOD(RNCurrentStepCount)

@end
