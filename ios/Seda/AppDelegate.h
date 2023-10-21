#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>
#import <RNGestureHandler/ReanimatedJSIModule.h> 
@interface AppDelegate : RCTAppDelegate
[bridge.moduleProvider addPackage:[[ReanimatedJSIModule alloc] init]]; // Make sure this line is present
@end
