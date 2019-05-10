import { IConfig } from '../../_interfaces/config';

//create a config state
export interface IConfigState {
    config: IConfig;
}

//set the initial config state
export const initialConfigState: IConfigState = {
    config: null
};