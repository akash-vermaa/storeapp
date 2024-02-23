import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        middle: String,
        last: {
            type: String,
            required: true
        }
    },
    username: {
        type: String,
        lowercase: true,
        minLength: 8,
        maxLength: 16,
        index: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    virtuals: {
        fullName: {
            get(){
                if (this.name.middle) return this.name.first+" "+this.name.middle+" "+this.name.last;
                else return this.name.first+" "+this.name.last;
            },
            set(value){
                const name = value.split(' ');
                this.name.first = name[0];

                if (name.length === 3){
                    this.name.meddle = name[1];
                    this.name.last = name[2]; 
                }
                else{
                    this.name.last = name[1]; 
                }
                
            }
        }
    }
});


const user = mongoose.model("User", userSchema);

console.log(user);
// export default mongoose.models.User || mongoose.model("Users", userSchema);