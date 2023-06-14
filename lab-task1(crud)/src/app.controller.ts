import { Controller, Get, Post, Body , Param ,Delete,Patch} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';

let User=[];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}



  @Post('add')
  addUser(@Body() create:CreateDto ){
    User.push(create);
    return 'user added';
  }

  @Get('user')
  getUsers() {
    return User;
  }

  @Get('user/:id')
  getuser(@Param('id')id:number)
  {
    return User.find((User)=>User.id==id);
  }

  @Delete('delete/:id')
  deleteuser(@Param('id') id: number) {
    User =User.filter(obj => obj.id !=id);
    return "delete successfully";
  }

  @Patch('update/:id/:name')
  updateuser(@Param('id') id: number, @Param('name') name: string){
    let user = User.find((User)=>User.id==id)

    if(user){
      user.name = name 
      return "name updated successfully";
    
    }
    else{
      return "Id not found";
    }
  }

}
