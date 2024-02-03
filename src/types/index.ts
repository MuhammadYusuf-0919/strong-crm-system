export interface ConfigState {
    entity: string;
    captions: string[];
    create: boolean;
    update: boolean;
    editValue: FormItem
}
interface FormItem {
    name: string;
    job: string;
    email: string;
    address: string;
    contact: string;
    status: string;
    age: string;
    description: string;
}
export interface FormData {
    row: FormItem[];
    config: ConfigState
}