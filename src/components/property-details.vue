<template>
  <div
    class="shadow-lg p-8 -mb-12"
    style="background-image: url('../src/assets/images/background.PNG'); background-size: cover; background-position: center; height: 100%"
  >
    <div class="md:w-6/12 mx-auto p-8 md:p-12 rounded-lg shadow-md bg-white">
      <div class="flex justify-center mb-5">
        <img src="../assets/images/vank.PNG" alt="Logo" />
      </div>

      <!-- Progress Bar -->
      <div class="flex justify-between mb-6">
        <div
          class="flex-1 h-2 rounded-l-lg"
          :class="currentStep === 1 ? 'bg-blue-600' : 'bg-gray-300'"
        ></div>
        <div
          class="flex-1 h-2 rounded-r-lg"
          :class="currentStep === 2 ? 'bg-blue-600' : 'bg-gray-300'"
        ></div>
      </div>

      <!-- Step 1 -->
      <div v-if="currentStep === 1">
        <h2 class="text-3xl font-bold mb-6 text-center">Property Details</h2>
        <form @submit.prevent="handleNextStep">
          <div v-for="(field, index) in step1Fields" :key="index" class="mb-4">
            <label class="block text-sm font-medium text-gray-700">
              {{ field.label }} <span class="text-red-500">*</span>
            </label>
            <input
              v-if="field.type === 'input'"
              :id="field.model"
              v-model="form[field.model]"
              :type="field.inputType || 'text'"
              class="mt-1 block p-2 w-full border rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              :placeholder="field.placeholder"
            />
            <select
              v-else
              :id="field.model"
              v-model="form[field.model]"
              class="mt-1 block p-2 w-full border rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>Select {{ field.label }}</option>
              <option v-for="option in field.options" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <button
            type="submit"
            class="px-6 py-2 w-full text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Next
          </button>
        </form>
      </div>

      <!-- Step 2 -->
      <div v-if="currentStep === 2">
        <h2 class="text-3xl font-bold mb-6 text-center">Owner's Details</h2>
        <form @submit.prevent="handleSubmit">
          <div v-for="(field, index) in step2Fields" :key="index" class="mb-4">
            <label class="block text-sm font-medium text-gray-700">
              {{ field.label }} <span class="text-red-500">*</span>
            </label>
            <input
              v-if="field.type === 'input'"
              :id="field.model"
              v-model="form[field.model]"
              :type="field.inputType || 'text'"
              class="mt-1 block p-2 w-full border rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              :placeholder="field.placeholder"
            />
          </div>
          <div class="flex justify-between">
            <button
              type="button"
              @click="handlePreviousStep"
              class="px-6 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-700 focus:ring-2 focus:ring-gray-500"
            >
              Back
            </button>
            <button
              type="submit"
              class="px-6 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
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
      step1Fields: [
        { label: "Listing Title", model: "title", type: "input", placeholder: "Enter the title" },
        {
          label: "Type",
          model: "type",
          type: "select",
          options: ["Apartment", "House", "Commercial"],
        },
        {
          label: "Square Meters",
          model: "squareMeters",
          type: "input",
          inputType: "number",
          placeholder: "Enter square meters",
        },
        {
          label: "Address",
          model: "address",
          type: "input",
          placeholder: "Enter address",
        },
      ],
      step2Fields: [
        {
          label: "Description",
          model: "description",
          type: "input",
          inputType: "text",
          placeholder: "Enter a detailed description",
        },
        {
          label: "Price",
          model: "price",
          type: "input",
          inputType: "number",
          placeholder: "Enter price",
        },
        {
          label: "Your Phone Number",
          model: "phoneNumber",
          type: "input",
          inputType: "tel",
          placeholder: "Enter phone number",
        },
        {
          label: "Your Name",
          model: "name",
          type: "input",
          placeholder: "Enter name",
        },
      ],
    };
  },
  methods: {
    handleNextStep() {
      if (this.validateFields(this.step1Fields)) {
        this.currentStep = 2;
      }
    },
    handlePreviousStep() {
      this.currentStep = 1;
    },
    handleSubmit() {
      if (this.validateFields(this.step2Fields)) {
        alert("Form submitted successfully!");
        console.log(this.form);
        this.$router.push("/summission-review");
      }
    },
    validateFields(fields) {
      for (const field of fields) {
        if (!this.form[field.model]) {
          alert(`Please fill out the ${field.label} field.`);
          return false;
        }
      }
      return true;
    },
  },
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>
