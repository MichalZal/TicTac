export interface Video {
	caption: string;
	video: {
		asset: {
			id: string;
			url: string;
		};
	};
	_id: string;
	postedBy: {
		_id: string;
		userName: string;
		image: string;
	};
	likes: {
		postedBy: {
			_id: string;
			userName: string;
			image: string;
		};
	}[];
	comments: {
		comment: string;
		_key: string;
		postedBy: {
			_ref: string;
		};
	}[];
	userId: string;
	// comments: {
	//   comment: string;
	//   _key: string;
	//   postedBy: {
	//     image: string;
	//     userName: string;
	//     _id: string
	//   }
	// }[],
}

export interface IUser {
	_id: string;
	_type: string;
	userName: string;
	image: string;
}
