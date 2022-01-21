/*
import Parent from "./parent";
import ChildV2 from "./child-v2";

const child = new ChildV2(console);
const parent = new Parent(child);
parent.doSomething();
*/

import diContainer from "./di-container";
import { IParent } from "./parent-v2";

const parent = diContainer.get<IParent>('IParent');
parent.doSomething();
