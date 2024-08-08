import { ContactBody } from "./contactBody";

export class Contact {
    id: number;
    name: string;
    email: string | null;
    phone: string;
    favorite: boolean;

    body(): ContactBody {
        let body: ContactBody = new ContactBody();
        body.name = this.name;
        body.email = this.email;
        body.phone = this.phone;
        body.favorite = this.favorite;
        return body;
    }
}
