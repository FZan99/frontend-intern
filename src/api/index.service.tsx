import { AdminApiService } from './admin-api.service';
import { UserApiService } from './user-api.service';
import { PublicApiService } from './public-api.service';

export const ApiService= {
  admins: new AdminApiService(),
  users: new UserApiService(),
  publics: new PublicApiService()
};
