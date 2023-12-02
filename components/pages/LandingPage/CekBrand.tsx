"use client";

import React, { Fragment, useState } from "react";
import { products } from "../../../store/product";
import { Dialog, Transition } from "@headlessui/react";
import { FcSearch } from "react-icons/fc";

const SelectTheme: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const filteredSuggestions = products.filter((product) =>
      product.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSelectSuggestion = (selectedValue: string) => {
    setInputValue(selectedValue);
    setSuggestions([]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <section id="cekbrand">
      <div className="relative flex flex-col w-full px-4 sm:px-10 xl:container justify-center items-center my-40">
        <h1 className="text-[#29895e] text-4xl md:text-6xl xl:text-7xl font-bold mx-auto px-2">
          CEK BRAND
        </h1>

        <p className="w-full text-justify sm:text-center mt-4 px-8 text-2xl">
          Sebuah platform yang mempromosikan konsumerisme hati nurani dengan
          mengidentifikasi / memfasilitasi akses ke informasi tentang perusahaan
          mana yang mendukung atau tidak mendukung Pendudukan Israel ilegal di
          Palestina.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 justify-center items-center py-4">
            <input
              className="p-4 mt-4 border-2 border-[#3fd592] rounded-full w-[200px] sm:w-[400px] lg:w-[700px]"
              type="text"
              id="cek"
              name="cek"
              placeholder="Cek disini"
              value={inputValue}
              onChange={handleInputChange}
              list="products"
            />

            <button type="submit" onClick={openModal}>
              <FcSearch size={48} className="mt-4" />
            </button>
          </div>
        </form>

        {/* Datalist for autocomplete suggestions */}
        <datalist id="products">
          {suggestions.map((suggestion, index) => (
            <option key={index} value={suggestion} onClick={openModal} />
          ))}
        </datalist>

        <>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Hasil Pencarian Produk
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Product &nbsp;
                          {suggestions.length > 0 ? (
                            <>
                              {suggestions.map((suggestion, index) => (
                                <>
                                  <span
                                    key={index}
                                    onClick={() =>
                                      handleSelectSuggestion(suggestion)
                                    }
                                    className="font-bold"
                                  >
                                    {suggestion}
                                  </span>
                                  <span>
                                    &nbsp; yang anda pilih
                                    <span className="text-red-500">&nbsp;terafiliasi dengan Israel&nbsp;</span>, diharapkan anda menghidari produk
                                    tersebut.
                                  </span>
                                </>
                              ))}
                            </>
                          ) : (
                            <span>
                              ini tidak ditemukan, ingin memberi kami
                              masukan?
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Baik dimengerti, terimakasih!
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      </div>
    </section>
  );
};

export default SelectTheme;
