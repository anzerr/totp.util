
declare namespace totp {

	class Hotp {

		key: string;
        constructor(key: string, hash?: string);
		get(t: number, size?: number): string;
		static generate(size?: number): Totp;

	}

	class Totp {

		key: string;
		constructor(key: string, hash?: string);
		getTime(t: number, size?: number): string;
		get(t?: {size?: number, next?: number}): string | string[];
		static generate(size?: number): Totp;

	}

}

export as namespace totp;
export = totp;