<template>
<div class="shadow-lg p-8  -mb-12" style="background-image: url('../src/assets/images/background.PNG'); background-size: cover; background-position: center; height: 100%;"> 
   <div class="md:w-5/12 m-auto p-12 bg-white">
   <div class="flex justify-center">
       <img src="../src/assets/images/vank.PNG" alt="" />
     </div>
     <p class="font-bold text-3xl py-5 text-center">Post Your Property</p>
     <div class="border p-3">
       <p class="text-center">Property Location</p>
 
       <!-- State Dropdown -->
       <div>
         <div class="flex">
           <label class="block text-sm font-medium text-gray-700" for="state">State</label>
           <span class="text-red-500 pl-[2px]">*</span>
         </div>
         <select
           id="state"
           v-model="selectedState"
           @change="onStateChange"
           class="mt-1 p-2 block border w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
         >
           <option value="" disabled selected>Select a state</option>
           <option v-for="state in states" :key="state.id" :value="state.id">
             {{ state.name }}
           </option>
         </select>
       </div>
 
       <!-- LGA Dropdown -->
       <div>
         <div class="flex pt-5">
           <label class="block text-sm font-medium text-gray-700" for="lga">Local Government Area</label>
           <span class="text-red-500 pl-[2px]">*</span>
         </div>
         <select
           id="lga"
           v-model="selectedLGA"
           :disabled="localGovernmentAreas.length === 0"
           class="mt-1 p-2 block border w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
         >
           <option value="" disabled selected>Please select a state first</option>
           <option v-for="lga in localGovernmentAreas" :key="lga" :value="lga">
             {{ lga }}
           </option>
         </select>
       </div>
 
       <!-- Area Input -->
       <div>
         <div class="flex pt-5">
           <label class="block text-sm font-medium text-gray-700" for="area">Area</label>
           <span class="text-red-500 pl-[2px]">*</span>
         </div>
         <input
           id="area"
           v-model="area"
           type="number"
           class="mt-1 block border p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
           placeholder="Enter square meters"
         />
       </div>
     </div>
 
     <!-- Step 1: Upload Property Documents -->
     <div class="flex justify-center pt-12 border-b">
       <div class="pb-5">
         <p class="font-bold text-center">Step 1: Upload Property Documents</p>
         <p class="text-gray-500 pt-4">Please upload relevant property documents (deeds, certificates, etc).</p>
 
         <div class="bg-gray-50 mt-8 border flex justify-center p-8">
           <div @click="triggerFileInput1" class="cursor-pointer">
             <img
               v-if="uploadedImageUrl1"
               :src="uploadedImageUrl1"
               alt="Uploaded preview"
               class="w-40 h-40 object-cover rounded border"
             />
             <div v-else class="flex flex-col items-center">
               <img src="../src/assets/images/plus.PNG" alt="Upload icon" class="w-12 h-12" />
               <p class="text-gray-500">Click to upload property documents</p>
             </div>
           </div>
           <input
             type="file"
             ref="fileInput1"
             class="hidden"
             accept="image/*"
             @change="handleFileUpload1"
           />
         </div>
       </div>
     </div>
 
     <!-- Step 2: Upload Environment Photo -->
     <div class="flex justify-center pt-12">
       <div>
         <p class="font-bold text-center">Step 2: Upload Property Environment Photo</p>
         <p class="text-gray-500 pt-4">Add a clear photo showing the property's immediate surroundings.</p>
 
         <div class="bg-gray-50 mt-8 border flex justify-center p-8">
           <div @click="triggerFileInput2" class="cursor-pointer">
             <img
               v-if="uploadedImageUrl2"
               :src="uploadedImageUrl2"
               alt="Uploaded preview"
               class="w-40 h-40 object-cover rounded border"
             />
             <div v-else class="flex flex-col items-center">
               <img src="../src/assets/images/plus.PNG" alt="Upload icon" class="w-12 h-12" />
               <p class="text-gray-500">Click to upload environment photo</p>
             </div>
           </div>
           <input
             type="file"
             ref="fileInput2"
             class="hidden"
             accept="image/*"
             @change="handleFileUpload2"
           />
         </div>
       </div>
     </div>
 
     <!-- Submit Button -->
     <div class="pt-10 flex justify-center">
       <button
         @click="submitForm"
         class="px-6 py-2 bg-black text-white w-full rounded hover:bg-blue-600"
       >
         Continue to property Details
       </button>
     </div>
   </div>
 </div>
 </template>
 
 <script>
 import states from "./states.json";
 
 export default {
   name: "PostProperty",
   data() {
     return {
       states: states,
       selectedState: "",
       selectedLGA: "",
       area: "",
       localGovernmentAreas: [],
       uploadedImageUrl1: null,
       uploadedImageUrl2: null,
     };
   },
   computed: {
     formValid() {
       return (
         this.selectedState &&
         this.selectedLGA &&
         this.area &&
         this.uploadedImageUrl1 &&
         this.uploadedImageUrl2
       );
     },
   },
   methods: {
     onStateChange() {
       this.localGovernmentAreas = this.getLGAsForState(this.selectedState);
       this.selectedLGA = ""; // Reset LGA when state changes
     },
     getLGAsForState(stateId) {
       const state = this.states.find((state) => state.id === stateId);
       return state ? state.lgas : [];
     },
     triggerFileInput1() {
       this.$refs.fileInput1.click();
     },
     handleFileUpload1(event) {
       const file = event.target.files[0];
       if (file) {
         this.uploadedImageUrl1 = URL.createObjectURL(file);
       }
     },
     triggerFileInput2() {
       this.$refs.fileInput2.click();
     },
     handleFileUpload2(event) {
       const file = event.target.files[0];
       if (file) {
         this.uploadedImageUrl2 = URL.createObjectURL(file);
       }
     },
     submitForm() {
       if (this.formValid) {
         console.log("Form Submitted with the following details:");
         console.log("State:", this.selectedState);
         console.log("LGA:", this.selectedLGA);
         console.log("Area (sq meters):", this.area);
         console.log("Property Document URL:", this.uploadedImageUrl1);
         console.log("Environment Photo URL:", this.uploadedImageUrl2);
 
         alert("Form submitted successfully!");
       } else {
         alert("Please fill in all fields before submitting.");
       }
     },
   },
 };
 </script>
 




