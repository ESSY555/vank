<template>
    <div
      class="shadow-lg p-8 -mb-12"
      style="background-image: url('../src/assets/images/background.PNG'); background-size: cover; background-position: center; height: 100%"
    >
      <div class="md:w-6/12 mx-auto p-8 md:p-12 rounded-lg shadow-md bg-white">
        <div class="flex justify-center mb-5">
      <img src="../assets/images/vank.PNG" alt="">
    </div>
  
    <!-- part one -->
        <h2 class="text-3xl font-bold mb-6 text-center">Property Details</h2>
        <div class="mb-4">
    <router-link
      to="/"
      class="px-6 py-2 font-semibold rounded border my-3 hover:text-white transition-all duration-300 transform hover:bg-blue-600 hover:scale-105 active:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
    >
      Back to upload
    </router-link>
  </div>
  
        <form @submit.prevent="handleSubmit" class="space-y-4">
    
          <!-- Title -->
          <div>
            <div class="flex">
              <label class="block text-sm font-medium text-gray-700" for="title">Listing Title</label>
              <span class="text-red-500 pl-[2px]">*</span>
            </div>
            <input
              id="title"
              v-model="form.title"
              type="text"
              class="mt-1 p-2 block border w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter the title"
            />
          </div>
    
          <!-- Type -->
          <div>
            <div class="flex">
              <label class="block text-sm font-medium text-gray-700" for="Type">Type</label>
              <span class="text-red-500 pl-[2px]">*</span>
            </div>
            <select
              id="type"
              v-model="form.type"
              class="mt-1 p-2 block border w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>Select Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
    
          <!-- Square Meters -->
          <div>
            <div class="flex">
              <label class="block text-sm font-medium text-gray-700" for="Meters">Square Meters</label>
              <span class="text-red-500 pl-[2px]">*</span>
            </div>
            <input
              id="squareMeters"
              v-model="form.squareMeters"
              type="number"
              class="mt-1 block border p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter square meters"
            />
          </div>
    
    
          <div>
            <div class="flex">
              <label class="block text-sm font-medium text-gray-700" for="Address">Address</label>
              <span class="text-red-500 pl-[2px]">*</span>
            </div>
            <input
              id="address"
              v-model="form.address"
              type="text"
              class="mt-1 border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter address"
            />
          </div>
    
          <div>
            <div class="flex">
              <label class="block text-sm font-medium text-gray-700" for="Price">Property Documents</label>
              <span class="text-red-500 pl-[2px]">*</span>
            </div>
            <div>
              <div v-for="(option, index) in options" :key="index" class="flex gap-2">
                <input
                  type="checkbox"
                  :checked="selectedOption === option"
                  @change="selectOption(option)"
                />
                <p>{{ option }}</p>
              </div>
            </div>
          </div>
    
     <!-- part two -->
      <div>
          <div>
            <div class="flex">
              <label class="block text-sm font-medium text-gray-700" for="Description">Description</label>
              <span class="text-red-500 pl-[2px]">*</span>
            </div>
            <textarea
              id="description"
              v-model="form.description"
              rows="4"
              class="mt-1 border pt-2 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter a detailed description"
            ></textarea>
          </div>
    
          <div>
            <div class="flex">
              <label class="block text-sm font-medium text-gray-700" for="Price">Price</label>
              <span class="text-red-500 pl-[2px]">*</span>
            </div>
            <input
              id="price"
              v-model="form.price"
              type="number"
              class="mt-1 border block p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter price"
            />
          </div>
    
          <!-- Radio buttons (Negotiation) -->
          <div>
            <p>Are you open to negotiation?</p>
            <div class="flex gap-5">
              <div class="flex">
                <input
                  type="radio"
                  v-model="selectedOptionRadio"
                  value="Yes"
                />
                <p class="pl-[3px]">Yes</p>
              </div>
              <div class="flex">
                <input
                  type="radio"
                  v-model="selectedOptionRadio"
                  value="No"
                />
                <p class="pl-[3px]">No</p>
              </div>
            </div>
          </div>
    
          <div class="flex gap-3">
            <div class="flex-1">
              <div class="flex">
                <label class="block text-sm font-medium text-gray-700 text-nowrap" for="Number">Your phone Number</label>
                <span class="text-red-500 pl-[2px]">*</span>
              </div>
              <input
                id="phoneNumber"
                v-model="form.phoneNumber"
                type="tel"
                class="mt-1 border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your phone number"
              />
            </div>
    
            <div class="flex-1">
              <div class="flex">
                <label class="block text-sm font-medium text-gray-700" for="name">Your Name</label>
                <span class="text-red-500 pl-[2px]">*</span>
              </div>
              <input
                id="name"
                v-model="form.name"
                type="text"
                class="mt-1 border block p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
          </div>
    
          <!-- Fractional Option -->
          <div>
            <p>Are you happy to have your plot sold fractionally?</p>
            <div class="flex pt-5 flex-wrap gap-5">
              <div class="flex">
                <input
                  type="radio"
                  v-model="secondOptionRadio"
                  value="Yes"
                  :disabled="secondOptionRadio === 'No' || secondOptionRadio === 'I don\'t know what fractional means'"
                />
                <p class="pl-[3px]">Yes</p>
              </div>
              <div class="flex">
                <input
                  type="radio"
                  v-model="secondOptionRadio"
                  value="No"
                  :disabled="secondOptionRadio === 'Yes' || secondOptionRadio === 'I don\'t know what fractional means'"
                />
                <p class="pl-[3px]">No</p>
              </div>
              <div class="flex">
                <input
                  type="radio"
                  v-model="secondOptionRadio"
                  value="I don't know what fractional means"
                  :disabled="secondOptionRadio === 'Yes' || secondOptionRadio === 'No'"
                />
                <p class="pl-[3px]">I don't know what fractional means</p>
              </div>
            </div>
          </div>
    
          <!-- Submit Button -->
          <div class="w-full mt5">
            <button
              type="submit"
              class="px-6 mt-5 py-2 w-full text-white bg-black rounded-md shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Post Add
            </button>
          </div>
        </div>
        </form>
      </div>
    </div>
    
    </template>
    
    <script>
    export default {
    
      data() {
        return {
          selectedOptionRadio: null,
          secondOptionRadio: null,
          options: ['CFO', 'Deed of Assignment', 'Gazette', "Governor's Consent"], 
          selectedOption: null, 
          form: {
            title: "",
            type: "",
            squareMeters: "",
            address: "",
            description: "",
            price: "",
            phoneNumber: "",
            name: "",
          },
        };
      },
      
      methods: {
    selectOption(option) {
      this.selectedOption = this.selectedOption === option ? null : option;
    },
    handleSubmit() {
      const requiredFields = ['title', 'type', 'squareMeters', 'address', 'description', 'price', 'phoneNumber', 'name'];
  
      for (let field of requiredFields) {
        if (!this.form[field]) {
          alert(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}.`);
          return;
        }
      }
  
  
      if (!this.selectedOption) {
        alert('Please select at least one document.');
        return;
      }
  
  
      if (!this.selectedOptionRadio) {
        alert('Please select an option for "Are you open to negotiation?".');
        return;
      }
  
      if (!this.secondOptionRadio) {
        alert('Please select an option for "Are you happy to have your plot sold fractionally?".');
        return;
      }
  
      console.log('Form submitted successfully', this.form, {
        selectedOption: this.selectedOption,
        selectedOptionRadio: this.selectedOptionRadio,
        secondOptionRadio: this.secondOptionRadio,
      });
      alert('Form submitted successfully!');
      this.$router.push("/summission-review");
    },
  },
  
      name: 'property-details',
    };
    </script>
    