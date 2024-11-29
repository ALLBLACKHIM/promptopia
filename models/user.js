import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9\s]+$/, "Username invalid, it should contain alphanumeric letters and spaces!"]
    },
    image: {
        type: String,
    }
});

const User = models.User || model("User", UserSchema);

export default User;
