import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'teste1',
    loadChildren: () =>
      import('./pages/teste1/teste1.module').then((m) => m.Teste1Module),
  },
  {
    path: '',
    redirectTo: '/teste1',
    pathMatch: 'full',
  },
  { path: 'teste2', loadChildren: () => import('./pages/teste2/teste2.module').then(m => m.Teste2Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
