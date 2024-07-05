import { Module } from '@nestjs/common';
// Creando modulos para las dependencias
// Comando: nest generate module <nombre_modulo>
// Ejemplo corto: nest g mo auth
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
