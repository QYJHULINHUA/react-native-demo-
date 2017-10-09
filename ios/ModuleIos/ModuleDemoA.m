//
//  CalendarManager.m
//  bannerDemo
//
//  Created by Hulinhua on 2017/10/9.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "ModuleDemoA.h"

@implementation ModuleDemoA

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(printMyname:(NSString *)firstName seconName:(NSString *)secName)
{

  NSString *aatt = [self printIos:firstName secont:secName];
  RCTLog(@"%@",aatt);
}

- (NSString *)printIos:(NSString *)fName secont:(NSString *)sName
{
  return [NSString stringWithFormat:@"ios：我的名字叫%@%@",fName,sName];
}




@end
