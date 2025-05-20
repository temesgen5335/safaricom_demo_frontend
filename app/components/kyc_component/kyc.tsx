'use client';

import { useState } from 'react';
import DashboardNavbar from '../dashboard_navbar';

export default function KYCForm() {
  const [form, setForm] = useState({
    bank: '',
    branch: '',
    accountName: '',
    accountNumber: '',
    proofFile: null as File | null,
  });

  const [showBankSection, setShowBankSection] = useState(false); // NEW STATE
  const [errors, setErrors] = useState({} as Record<string, string>);

  const banks = ['Commercial Bank of Ethiopia', 'Dashen Bank', 'Awash Bank'];
  const branches = ['Addis Ababa Branch', 'Bole Branch', 'Piazza Branch'];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.bank) errs.bank = 'Bank name is required';
    if (!form.branch) errs.branch = 'Branch name is required';
    if (!form.accountName) errs.accountName = 'Account name is required';
    if (!form.accountNumber || !/^\d+$/.test(form.accountNumber))
      errs.accountNumber = 'Valid numeric account number is required';
    if (!form.proofFile)
      errs.proofFile = 'Proof of bank account (PDF, PNG, JPG) is required';
    return errs;
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file && ['application/pdf', 'image/png', 'image/jpeg'].includes(file.type)) {
      setForm({ ...form, proofFile: file });
      setErrors({ ...errors, proofFile: '' });
    } else {
      setErrors({ ...errors, proofFile: 'File must be PDF, PNG, or JPG' });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    alert('Proceeding to confirmation page...');
    // router.push('/confirmation');
  };

  const formSteps = [
    'check Merchant',
    'Distribution Detail',
    'Business Type',
    'Business Detail',
    'Business Owner',
    'Fund Withdraw',
    'Review'
  ];

  return (
    <div className="min-h-screen bg-[#f4f6f9] px-4 py-8">
      <DashboardNavbar />
      <div className="shadow-2xl bg-white mt-8 p-4">
        <h2 className="text-xl flex justify-center font-semibold text-gray-700 mt-4 mb-6">Partner Onboarding</h2>
        <div className="flex space-x-4 mb-6 text-sm font-medium text-gray-600">
            {formSteps.map((step, index) => (
            <div key={index} className="flex items-center space-x-1">
                <span className="text-green-600">✓</span>
                <span>{step}</span>
                {index < formSteps.length - 1 && <span className="mx-2 text-gray-400">→</span>}
            </div>
            ))}
        </div>

        <div className="mb-4 w-32 h-12 p-4 bg-white">
            <label className="inline-flex items-center">
            <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-green-600"
                checked={showBankSection}
                onChange={(e) => setShowBankSection(e.target.checked)}
            />
            <span className="ml-2 text-gray-700 font-medium ">Bank</span>
            </label>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-7xl transition-all duration-300">
          <h2 className="text-xl flex justify-center font-semibold text-gray-700 mb-6">Fund Withdraw Option</h2>
         {showBankSection && (
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-900">Bank</label>
              <select
                name="bank"
                value={form.bank}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 text-gray-900 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
              >
                <option value="">Select Bank</option>
                {banks.map((bank) => (
                  <option key={bank} value={bank}>{bank}</option>
                ))}
              </select>
              {errors.bank && <p className="text-sm text-red-500 mt-1">{errors.bank}</p>}
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700">Select Branch</label>
              <select
                name="branch"
                value={form.branch}
                onChange={handleChange}
                required
                className="mt-1 block w-full border text-gray-900 border-gray-300 rounded-md shadow-sm px-3 py-2"
              >
                <option value="">Select Branch</option>
                {branches.map((branch) => (
                  <option key={branch} value={branch}>{branch}</option>
                ))}
              </select>
              {errors.branch && <p className="text-sm text-red-500 mt-1">{errors.branch}</p>}
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700">Account Name</label>
              <input
                type="text"
                name="accountName"
                value={form.accountName}
                onChange={handleChange}
                required
                placeholder="Enter Account Name"
                className="mt-1 block w-full border border-gray-300 text-gray-900 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.accountName && <p className="text-sm text-red-500 mt-1">{errors.accountName}</p>}
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700">Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={form.accountNumber}
                onChange={handleChange}
                required
                placeholder="Enter Account Number"
                className="mt-1 block w-full border text-gray-900 border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.accountNumber && <p className="text-sm text-red-500 mt-1">{errors.accountNumber}</p>}
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700">Proof of Bank Account</label>
              <input
                type="file"
                accept=".pdf, .jpg, .jpeg, .png"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
              {errors.proofFile && <p className="text-sm text-red-500 mt-1">{errors.proofFile}</p>}
            </div>


          </form>
            )}
            <div className="flex justify-end gap-8 pt-4">
              <button type="button" className="px-5 py-2 bg-[#43b02a] text-white font-semibold rounded-md hover:bg-green-700">
                Back
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#43b02a] text-white font-semibold rounded-md hover:bg-green-700"
              >
                Next
              </button>
            </div>
        </div>
        
      </div>

    </div>
  );
}
