export interface IUserSignIn {
  email: string;
  password: string;
}

export interface IUserSignUp {
  name: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  isAdmin: boolean;
}

export interface IGetIUserType {
  id?: string;
  name: string;
  nickname: string;
  email: string;
  password: string;
  cpf: string;
  isAdmin?: boolean;
  profiles?: [
    {
      id: string;
      title: string;
      imageUrl: string;
    }
  ];
}

export interface IUserType {
  name: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  isAdmin?: boolean;
  profiles?: [
    {
      id: string;
      title: string;
      imageUrl: string;
    }
  ];
}

export interface IGamesTypes {
  id?: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imbScore: number;
  trailerYoutubeUrl: string;
  gameplayYouTubeUrl: string;
  genders?: [
    {
      id?: string;
      name: string;
    }
  ];
}

export interface ICreateGameType {
  id?: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imbScore: number;
  trailerYoutubeUrl: string;
  gameplayYouTubeUrl: string;
  genreGame: string;
}

export interface IGenrerTypes {
  id: string;
  name: string;
  gamesId?: string;
  gamesGender: [
    {
      title: string;
    }
  ];
}

export interface ICreateGenrerType {
  name: string;
}

export interface IProfilesTypes {
  id?: string;
  title: string;
  imageUrl: string;
  userId: string;
  user?: {
    nickname: string;
    email: string;
    isAdmin: boolean;
  };
  games?: [
    {
      id: string;
      title: string;
      coverImageUrl: string;
      description: string;
      year: number;
      imbScore: number;
      trailerYoutubeUrl: string;
      gameplayYouTubeUrl: string;
    }
  ];
}

export interface IHomePageTypes {
  profileData: {
    title: string;
    imageUrl: string;
    user: {
      nickname: string;
      isAdmin: boolean;
    };
    favoriteGames: {
      games: [
        {
          title: string;
          coverImageUrl: string;
          description: string;
          imbScore: number;
          genders: [
            {
              name: string;
            }
          ];
        }
      ];
    };
    games: [
      {
        title: string;
        coverImageUrl: string;
        description: string;
        imbScore: number;
        genders: [
          {
            name: string;
          }
        ];
      }
    ];
  };
  genrerList: [
    {
      genrer: string;
      title: [string];
    }
  ];
}

export interface IFavoriteGamesType {
  games: [
    {
      id: string;
      title: string;
      coverImageUrl: string;
      description: string;
      imbScore: number;
      genders: [
        {
          name: string;
        }
      ];
    }
  ];
  id: string;
}

export interface IGamesProfile {
  id?: string;
  title: string;
  coverImageUrl: string;
  description: string;
  imbScore: number;
  year: number;
  genders: [
    {
      name: string;
    }
  ];
}

export interface IAddFavorite {
  gameId: string | undefined;
  favoriteGameId: string | undefined;
}