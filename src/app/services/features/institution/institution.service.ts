import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { GlobalsService } from '../../core/globals.service';


@Injectable({
  providedIn: 'root'
})
export class InstitutionService {
  db:any = firebase.default.firestore();
  institutions: any = []

  constructor(
    private _globals: GlobalsService
  ) { }

  async addInstitutions(form: any) {
    return await new Promise(async (resolve, reject) => {
      this.db.collection('institutions').add(form)
      .then((docRef: any) => {
        alert("Institution created successfully");
        resolve("created")
      })
      .catch((error: any) => {
        reject({
          error: error.message || error.error || error
        });
      });
    })
  }

  async getInstitutions() {
    return await new Promise(async (resolve, reject) => {
      try {
        this._globals.spinner.show();
        this.institutions = [];
        this.db.collection("institutions").get().then((querySnapshot: any) => {
          this._globals.spinner.hide();
          querySnapshot.forEach((doc: any) => {
            let institution: any = doc.data();
            institution.id = doc.id;
            this.institutions.push(institution);
          });
          resolve(this.institutions)
        });
      } catch (e) {
        this._globals.spinner.hide();
        reject({
          error: e
        });
      }
    })
  }
}
