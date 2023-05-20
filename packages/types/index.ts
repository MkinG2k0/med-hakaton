export interface Company {
	name: string
	description: string
	photo: string
	isPrivate: boolean
	// arr
	employee: IEmployee[]
	intern: IIntern[]
	libs: ILibs[]
	// ent
}

export interface IIntern {
	name: string
	photo: string
	rating: number
}

interface ILibs {
	name: string
	tests: ITest[]
	documents: IDocuments[]
}

export interface IDocuments {
	name: string
	content: string
}

export interface IEmployee extends IIntern {

}

export interface ITest {
	name: string
	description: string
	photo: string
	data: any[]
}

export interface Interface {

}

export enum Role {
	admin,
	owner,
	manager,
	user
}


