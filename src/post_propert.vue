<template>
  <div class="shadow-lg md:w-8/12 m-auto p-5">
    <p class="font-bold text-3xl py-5 text-center">Post Your Property</p>
    <div class="border p-3">
      <p class="text-center">Property Location</p>

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

      <div>
        <div class="flex pt-5">
          <label class="block text-sm font-medium text-gray-700" for="lga">Local Government Area</label>
          <span class="text-red-500 pl-[2px]">*</span>
        </div>
        <select
          id="lga"
          class="mt-1 p-2 block border w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled selected>Please select a state first</option>
          <option v-for="lga in localGovernmentAreas" :key="lga" :value="lga">
            {{ lga }}
          </option>
        </select>
      </div>

      <div>
        <div class="flex pt-5">
          <label class="block text-sm font-medium text-gray-700" for="area">Area</label>
          <span class="text-red-500 pl-[2px]">*</span>
        </div>
        <input
          id="area"
          type="number"
          class="mt-1 block border p-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter square meters"
        />
      </div>
    </div>

   
    <div class="flex justify-center pt-12 border-b">
  <!-- Step 1: Upload Property Documents -->
  <div>
    <p class="font-bold text-center">Step 1: Upload Property Documents</p>
    <p class="text-gray-500 pt-4">Please upload relevant property documents (deeds, certificates, etc).</p>

    <div class="bg-gray-50 mt-8 border flex justify-center p-8">
      <!-- Image preview or upload prompt -->
      <div @click="triggerFileInput1" class="cursor-pointer">
        <img
          v-if="uploadedImageUrl1"
          :src="uploadedImageUrl1"
          alt="Uploaded preview"
          class="w-40 h-40 object-cover rounded border"
        />
        <div v-else class="flex flex-col items-center">
          <img
            src="../src/assets/images/plus.PNG"
            alt="Upload icon"
            class="w-12 h-12"
          />
          <p class="text-gray-500">Click to upload property documents</p>
        </div>
      </div>
      <!-- Hidden file input -->
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

<div class="flex justify-center pt-12">
  <!-- Step 2: Upload Property Environment Photo -->
  <div>
    <p class="font-bold text-center">Step 2: Upload Property Environment Photo</p>
    <p class="text-gray-500 pt-4">Add a clear photo showing the property's immediate surroundings.</p>

    <div class="bg-gray-50 mt-8 border flex justify-center p-8">
      <!-- Image preview or upload prompt -->
      <div @click="triggerFileInput2" class="cursor-pointer">
        <img
          v-if="uploadedImageUrl2"
          :src="uploadedImageUrl2"
          alt="Uploaded preview"
          class="w-40 h-40 object-cover rounded border"
        />
        <div v-else class="flex flex-col items-center">
          <img
            src="../src/assets/images/plus.PNG"
            alt="Upload icon"
            class="w-12 h-12"
          />
          <p class="text-gray-500">Click to upload environment photo</p>
        </div>
      </div>
      <!-- Hidden file input -->
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

  </div>
</template>

<script>
import states from './states.json'; 

export default {
  name: 'PostProperty',
  data() {
    return {
      states: states, 
      selectedState: '', 
      localGovernmentAreas: [], 
      uploadedImageUrl1: null, 
      uploadedImageUrl2: null, 
    };
  },
  methods: {

    onStateChange() {
      this.localGovernmentAreas = this.getLGAsForState(this.selectedState);
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
        console.log('File selected (Step 1):', file.name);
      }
    },

    triggerFileInput2() {
      this.$refs.fileInput2.click();
    },
  
    handleFileUpload2(event) {
      const file = event.target.files[0];
      if (file) {
        this.uploadedImageUrl2 = URL.createObjectURL(file);
        console.log('File selected (Step 2):', file.name);
      }
    },
  },
};
</script>

