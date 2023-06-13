import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message.component';

const routes: Routes = [{ path: '', component: MessageComponent }, { path: 'liste-messages', loadChildren: () => import('./liste-messages/liste-messages.module').then(m => m.ListeMessagesModule) }, { path: 'ajouter-message', loadChildren: () => import('./ajouter-message/ajouter-message.module').then(m => m.AjouterMessageModule) }, { path: 'modifier-message', loadChildren: () => import('./modifier-message/modifier-message.module').then(m => m.ModifierMessageModule) }, { path: 'liste-diffusion', loadChildren: () => import('./liste-diffusion/liste-diffusion.module').then(m => m.ListeDiffusionModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
