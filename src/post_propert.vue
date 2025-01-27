<template>
  <div
    class="shadow-lg p-8 -mb-12"
    style="background-image: url('../src/assets/images/background.PNG'); background-size: cover; background-position: center; height: 100%;"
  >
    <div class="md:w-5/12 m-auto p-12 bg-white">
      <div class="flex justify-center">
        <img src="../src/assets/images/vank.PNG" alt="" />
      </div>
      <p class="font-bold text-3xl py-5 text-center">Post Your Property</p>

      <!-- Progress Bar -->
      <div class="flex justify-between items-center mb-8">
        <div
          :class="`flex-1 h-2 ${currentPart >= 1 ? 'bg-blue-500' : 'bg-gray-300'}`"
        ></div>
        <div class="w-6 h-6 rounded-full border-2 border-blue-500 bg-blue-500"></div>
        <div
          :class="`flex-1 h-2 ${currentPart >= 2 ? 'bg-blue-500' : 'bg-gray-300'}`"
        ></div>
        <div
          class="w-6 h-6 rounded-full border-2"
          :class="currentPart === 2 ? 'border-blue-500 bg-blue-500' : 'border-gray-300 bg-white'"
        ></div>
      </div>

      <!-- Part 1: Property Location -->
      <div v-if="currentPart === 1" class="border p-3">
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

        <!-- Next Button -->
        <div class="pt-8 flex justify-center">
          <button
            @click="validatePartOne"
            class="px-6 py-2 bg-black text-white w-full rounded hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>

      <!-- Part 2: Upload Documents -->
      <div v-if="currentPart === 2">
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

        <p class="font-bold text-center pt-12">Step 2: Upload Property Environment Photo</p>
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

        <!-- Submit Button -->
        <div class="pt-8 flex justify-center">
          <button
            @click="validatePartTwo"
            class="px-6 py-2 bg-black text-white w-full rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
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
      currentPart: 1,
    };
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
    validatePartOne() {
      const missingFields = [];
      const filledData = {
        selectedState: this.selectedState,
        selectedLGA: this.selectedLGA,
        area: this.area,
      };

      if (!this.selectedState) missingFields.push("State");
      if (!this.selectedLGA) missingFields.push("Local Government Area");
      if (!this.area) missingFields.push("Area");

      console.log("Part 1 Filled Data:", filledData);

      if (missingFields.length > 0) {
        console.warn("Part 1 Missing Fields:", missingFields);
        alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
      } else {
        this.currentPart = 2; // Move to Part 2
      }
    },
    validatePartTwo() {
      const missingFields = [];
      const filledData = {
        uploadedImageUrl1: this.uploadedImageUrl1 ? "Uploaded" : "Not Uploaded",
        uploadedImageUrl2: this.uploadedImageUrl2 ? "Uploaded" : "Not Uploaded",
      };

      if (!this.uploadedImageUrl1) missingFields.push("Property Document Upload");
      if (!this.uploadedImageUrl2) missingFields.push("Environment Photo Upload");

      console.log("Part 2 Filled Data:", filledData);

      if (missingFields.length > 0) {
        console.warn("Part 2 Missing Fields:", missingFields);
        alert(`Please upload the following files: ${missingFields.join(", ")}`);
      } else {
        console.log("Form Submitted Successfully!");
        alert("Form submitted successfully!");
        // You can handle the form submission here
      }
    },
  },
};
</script>

