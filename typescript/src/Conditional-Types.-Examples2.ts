
type vague1 = unknown extends any ? true : false;

type vague2 = never extends any ? true : false;

type vague3 = any extends any ? true : false;

type vague4 = void extends any ? true : false;

type vague5 = undefined extends void ? true : false;

type vague6 = undefined extends never ? true : false;

type vague7 = undefined extends unknown ? true :  false;

type vague8 = null extends any ? true : false;

type vague9 = null extends never ? true : false;

type vague10 = never extends never ? true : false;

type vague11 = unknown extends never ? true : false;

type vague12 = string[] extends any[] ? true : false;

type vague13 = string[] extends string ? true : false;

type vague14 = string[] extends any ? true : false;

type vague15 = number extends any[] ? true : false;
