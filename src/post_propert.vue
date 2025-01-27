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

    <div class="flex justify-center pt-12">
     <div>
      <p class="font-bold text-center">Step 1: upload Property Documents</p>
      <p class="text-gray-500">Please Upload relevant property documents (deeds,Certificates etc)</p>
     </div>

     <div>

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
      localGovernmentAreas: []  
    };
  },
  methods: {
   
    onStateChange() {
    
      this.localGovernmentAreas = this.getLGAsForState(this.selectedState);
    },

 
    getLGAsForState(stateId) {
    
      const state = this.states.find(state => state.id === stateId);
      
 
      return state ? state.lgas : [];
    }
  }
};
</script>

