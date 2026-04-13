export declare class PasswordService {
    private saltRounds;
    hash(password: string): Promise<string>;
    compare(password: string, hash: string): Promise<boolean>;
}
