<template>
    <div class="container">
        <div class="signin_container">
            <h1>Sign in</h1>

            <form @submit.prevent="onSubmit" >
                <div 
                    class="input_field"
                    :class="{invalid: $v.formdata.email.$error}"
                >
                    <label for="">Email</label>
                    <input type="email" v-model="formdata.email" @blur="$v.formdata.email.$touch()"/>
                    <div v-if="$v.formdata.email.$error">
                        <p class="error_label" v-if="!$v.formdata.email.required">
                            This field is required
                        </p>
                        <p class="error_label" v-if="!$v.formdata.email.email">
                            Please enter a valid email
                        </p>
                    </div>
                </div>

                <div 
                class="input_field"
                :class="{invalid: $v.formdata.password.$error}"
                >
                    <label for="">Password</label>
                    <input type="password" v-model.trim="formdata.password" @blur="$v.formdata.password.$touch()"/>

                    <div v-if="$v.formdata.password.$error">
                        <p class="error_label" v-if="!$v.formdata.password.required">
                            This field is required
                        </p>
                        <p class="error_label" v-if="!$v.formdata.password.minLength">
                            At least 4 characters
                        </p>
                    </div>
                </div>

                <button type="submit">
                    Sign in
                </button>

                <p class="error_label" v-if="error">
                    Something is wrong here
                </p>
                <p class="error_label" v-if="authFailed">
                    Email not found 
                </p>
            </form>
        </div>
    </div>
</template>
<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
    data(){
        return {
            error:false,
            formdata:{
                email:'',
                password:''
            }
        }
    },
    computed: {
        authFailed(){
            return this.$store.state.admin.authFailed;
        }
    },
    destroyed(){
        this.$store.commit("admin/authFailed","reset")
    },
    validations:{
        formdata:{
            email:{
                required,
                email
            },
            password:{
                required,
                minLength:minLength(4)
            }
        }
    },
    methods:{
        onSubmit(){

            if(!this.$v.$invalid){
                this.$store.dispatch('admin/signin', this.formdata);
            }else{
                this.error = true;
                setTimeout(()=>{
                    this.error = false
                },3000)
            }
            
        }
    }
}
</script>
<style>
    .input_field.invalid input,
    .input_field.invalid select{
        border:1px solid red;
    }
</style>