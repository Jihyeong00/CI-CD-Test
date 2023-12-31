import type { UserType } from '@/types';
import { Avatar, AvatarGroup } from '@mui/material';
import S from './style';

type PropType = {
  /**
   * 해당 사용자 이미지의 크기를 지정을 해줍니다.
   * */
  size: number;
  /**
   * 사용자들에 대한 정보를 받습니다.
   */
  users: UserType[];
  /**
   * 최대 몇 개의 사진을 보여줄지 결정합니다.
   */
  max: number;
  fontSize?: number;
};

export const Avatars = ({ users, size, max, fontSize = 15 }: PropType) => (
  <S.Wrapper fontSize={fontSize}>
    <AvatarGroup
      max={max}
      sx={{
        '& .MuiAvatar-root': { width: size, height: size, fontSize: 15 },
      }}
    >
      {users?.map((user) => {
        const { userId, userName, imgUrl } = user;
        return (
          <Avatar
            sx={{ width: size, height: size, backgroundColor: 'white' }}
            key={userId}
            alt={userName}
            src={imgUrl}
          />
        );
      })}
    </AvatarGroup>
  </S.Wrapper>
);
