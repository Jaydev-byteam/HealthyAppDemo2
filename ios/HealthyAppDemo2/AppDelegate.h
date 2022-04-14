#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import "FirebaseManager.h"
#import "HSLocationTracking.h"

@class FirebaseManager;
@class HSLocationTracking;
@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
