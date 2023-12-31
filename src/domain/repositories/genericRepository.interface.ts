export abstract class GenericRepositoryInterface {
    abstract create(record: any): Promise<any>

    abstract update(record: any): Promise<any>

    abstract get(id: string): Promise<any>

    abstract delete(id: string): Promise<any>

    abstract find(): Promise<any>
}
