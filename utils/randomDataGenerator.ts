import {faker} from '@faker-js/faker';

export class RandomDataUtil
{

    static getFirstName()
    {
        return faker.person.firstName();
    }

    static getLastName()
    {
        return faker.person.lastName();
    }

    static getFullName()
    {
        return faker.person.fullName();
    }

    static getEMail()
    {
        return faker.internet.email();
    }

    static getPhoneNumber()
    {
        return faker.phone.number();
    }

    static getPassword():string
    {
        return faker.internet.password();
    }


    
    
}