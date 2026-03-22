export interface IFaresData {
	PayG: number;
	Hopper: number;
	Cap: number;
}

export interface IPassesData {
	Day: number;
	SevenDay: number;
}

export interface IValuesResult {
	fares: IFaresData;
	passes: IPassesData;
}
