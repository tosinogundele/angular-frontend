import { Injectable } from '@angular/core';
import { GlobalsService } from '../core/globals.service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class UsersService 
{
    loader: boolean = false;

    constructor(
        private fauth: AngularFireAuth,
        private _globals: GlobalsService
    ) {}

    async isLoggedOn(): Promise<any> {
        return await new Promise((resolve: any, reject: any) => {
            this._globals.storage.getItem('userdata')
            .then(async (res: any) => {
                if(res) {
                    // this.userInfo = res;
                    // const jwt = await this._globals.storage.getItem('jwt')
                    // this.api.setJwt(jwt)
                    resolve(true);
                } else {
                    reject(false)
                }
            })
            .catch((ex: any) => {
                reject(false)
            });
        })
    }

    public async login(form: any){
        return await new Promise((resolve, reject) => {
          try {
            this.fauth.signInWithEmailAndPassword(form.email, form.password)
            .then((res: any) => {
              resolve({
                fullname: '',
                tokens: {
                  accesstoken: '',
                  refreshtoken: ''
                },
                auth_type: 'email',
                username: res.user.providerData[0]['displayName'],
                email: res.user.providerData[0]['email'],
                image: res.user.providerData[0]['photoURL'],
                uid: res.user['uid']
              })
            })
            .catch((ex: any) => {
              reject({
                error: ex.error || ex.message || ex
              })
            })
          } catch(ex: any) {
            reject({
              error: ex.error || ex.message || ex
            })
          }
        })
    }
    
    async register(email: string, password: string) {
      return await new Promise((resolve, reject) => {
        try {
          this.fauth.createUserWithEmailAndPassword(email, password)
          .then(async (res: any) => {
            await firebase.default.auth().currentUser?.sendEmailVerification()
            resolve({
              uid: res.user['uid']
            })
          })
          .catch((ex: any) => {
            reject({
              error: ex.error || ex.message || ex
            })
          })
        } catch(ex: any) {
          reject({
            error: ex.error || ex.message || ex
          })
        }
      })
    }
}