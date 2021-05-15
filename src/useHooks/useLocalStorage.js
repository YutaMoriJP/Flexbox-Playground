import { useState, useEffect } from "react";

const useLocalStorage = (key, setState) => {};

const setLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
};

const getLocalStorage = (key) => localStorage.getItem(key);
