import { Column, CreateDateColumn, Entity, OneToOne } from 'typeorm';
import User from './User';

@Entity('user_followers')
class UserFollower {
  @Column()
  user_id: string;

  @OneToOne(() => User)
  user: User;

  @Column()
  follower_id: string;

  @OneToOne(() => User)
  follower: User;

  @CreateDateColumn()
  created_at: Date;
}

export default UserFollower;
