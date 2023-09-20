import { AppDataSource } from './data-source';
import { User, Products } from './entity/User';

AppDataSource.initialize()
  .then(async () => {
    console.log('Inserting a new user into the database...');
    const user = new User();
    user.firstName = 'Timber';
    user.lastName = 'Saw';
    user.age = 25;
    const product = new Products();
    product.productName = 'Itachi';
    product.qtd = 1;
    await AppDataSource.manager.save(user);
    await AppDataSource.manager.save(product);
    console.log(
      'Essa e uma maneira que o TypeOrm permite salvar dados no banco',
    );
    const users = await AppDataSource.manager.find(User);
    console.log('Loaded users: ', users);

    console.log('Sucesso gato');
  })
  .catch((error) => console.log('aquiiiiiii', error));
