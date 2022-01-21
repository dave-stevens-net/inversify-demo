import "reflect-metadata";

import { IChild } from "./child-v2";
import {Container} from 'inversify'
import ChildV3 from "./child-v3";
import ParentV2, { IParent } from "./parent-v2";

const diContainer = new Container();

diContainer.bind<IChild>('IChild').to(ChildV3);
diContainer.bind<Console>('Console').toConstantValue(console);
diContainer.bind<IParent>('IParent').to(ParentV2);

export default diContainer;
