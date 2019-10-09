
declare namespace totp {

	class Hotp {

		key: Buffer;
        constructor(key: string, hash?: string);
		get(n: number, size?: number): string;
		static generate(size?: number): Totp;

	}

	class Totp {

		key: Buffer;
		constructor(key: string, hash?: string);
		getValue(n: number, size?: number): string;
		get(options?: {size?: number, next?: number}): string | string[];
		static generate(size?: number): Totp;

	}

}

export as namespace totp;
export = totp;