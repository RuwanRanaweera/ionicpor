import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Gem } from './gem.model';

@Injectable({
  providedIn: 'root'
})
export class GemsService {

  private _gems: Gem[] = [
    new Gem (
      'g1',
      'Transparent',
      'a gemstone having the property of transmitting light without serious diffusion. garnet - any of a group of hard glassy minerals (silicates of various metals) used as gemstones and as an abrasive',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkhcNab_5EVuirSa7edpQa7rO3LQy98PQHjg&usqp=CAU',
      59.99,
      'abc'
      ),
      new Gem (
        'g2',
        'Ruby',
        'A ruby is a pink to blood-red coloured gemstone, a variety of the mineral corundum (aluminium oxide). Other varieties of gem-quality corundum are called sapphires',
        'https://images-na.ssl-images-amazon.com/images/I/61f89sn3ksL._AC_SL1000_.jpg',
        79.99,
        'abc'
        ),
        new Gem (
          'g3',
          'Sapphire',
          'Sapphire is the most precious and valuable blue gemstone. It is a very desirable gemstone due to its excellent color, hardness, durability, and luster',
          'https://www.gia.edu/images/polished-sapphire.png',
          109.99,
          'abc'
          ),
          new Gem (
            'g4',
            'Moonstone',
            'Moonstone is a variety of the feldspar-group mineral orthoclase. During formation, orthoclase and albite separate into alternating layers. When light falls between these thin layers it is scattered producing the phenomenon called adularescence',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTapzey0KipyK9t1yqMt3D2SqoOoZh-N8yoKw&usqp=CAU',
            149.99,
            'abc'
            ),
            new Gem (
              'g5',
              'Zircon',
              ' The natural colour of zircon varies between colourless, yellow-golden, red, brown, blue and green. The name derives from the Persian zargun, meaning "gold-hued',
              'https://www.ajsgem.com/sites/default/files1/Blue-Zircon-Oval-400.jpg',
              179.99,
              'abc'
              )

];

  get gems() {
    return [...this._gems];
  }

  getGem(id: string){
    return {...this._gems.find(g => g.id === id)};
  }
    constructor(private authService: AuthService) { }

    addGem(
        title: string,
        description: string,
        price: number) {
      const newGem = new Gem (
        Math.random().toString(),
        title,
        description,
       'https://cdn.britannica.com/78/170778-131-D35E060F/Reflections-diamond.jpg',
        price,
        this.authService.userId
        );
      this._gems.push(newGem);
    }

   

}
