interface ValidationRule {
  required: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
}

interface CountryValidationSchema {
  [field: string]: ValidationRule;
}

interface ValidationSchemas {
  [country: string]: CountryValidationSchema;
}

export const validationSchemas: ValidationSchemas = {
  USA: {
    ssn: {
      required: 'SSN is required',
      pattern: {
        value: /^[0-9]{9}$/,
        message: 'SSN must be 9 digits'
      }
    },
    state: {
      required: 'State is required',
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'State must contain only letters'
      }
    },
    city: {
      required: 'City is required',
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'City must contain only letters'
      }
    },
    zip: {
      required: 'ZIP Code is required',
      pattern: {
        value: /^[0-9]{5}$/,
        message: 'ZIP code must be 5 digits'
      }
    }
  },
  UAE: {
    emiratesId: {
      required: 'Emirates ID is required',
      pattern: {
        value: /^[0-9]{15}$/,
        message: 'Emirates ID must be 15 digits'
      }
    },
    visaType: {
      required: 'Visa Type is required'
    },
    city: {
      required: 'City is required',
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'City must contain only letters'
      }
    },
    emirate: {
      required: 'Emirate is required',
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Emirate must contain only letters'
      }
    }
  },
  Canada: {
    sin: {
      required: 'SIN is required',
      pattern: {
        value: /^[0-9]{9}$/,
        message: 'SIN must be 9 digits'
      }
    },
    province: {
      required: 'Province is required',
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Province must contain only letters'
      }
    },
    city: {
      required: 'City is required',
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'City must contain only letters'
      }
    },
    postalCode: {
      required: 'Postal Code is required',
      pattern: {
        value: /^[A-Za-z0-9]{6}$/,
        message: 'Postal Code must be 6 alphanumeric characters'
      }
    }
  },
  Germany: {
    taxId: {
      required: 'Tax ID is required',
      pattern: {
        value: /^(DE)?[0-9]{9}$/,
        message: 'Tax ID format is incorrect'
      }
    },
    bundesland: {
      required: 'Bundesland is required',
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Bundesland must contain only letters'
      }
    },
    city: {
      required: 'City is required',
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'City must contain only letters'
      }
    },
    postcode: {
      required: 'Postcode is required',
      pattern: {
        value: /^[A-Za-z0-9\s]{6,8}$/,
        message: 'Postcode format is invalid'
      }
    }
  },
  UK: {
    nin: {
      required: 'National Insurance Number is required'
      // todo: pattern for NIN format
    },
    county: {
      required: 'County is required',
      pattern: {
        value: /^[A-Za-z\s]+$/,
          message: 'County must contain only letters'
      }
    },
    city: {
      required: 'City is required',
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'City must contain only letters'
      }
    },
    postcode: {
      required: 'Postcode is required',
      pattern: {
        value: /^[A-Za-z0-9\s]{6,8}$/,
        message: 'Postcode format is invalid'
      }
    }
  },
  India: {
    aadhaar: {
      required: 'Aadhaar number is required',
      pattern: {
        value: /^[0-9]{12}$/,
        message: 'Aadhaar must be 12 digits'
      }
    },
    state: {
      required: 'State is required',
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'State must contain only letters'
      }
    },
    city: {
      required: 'City is required',
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'City must contain only letters'
      }
    },
    pinCode: {
      required: 'PIN Code is required',
      pattern: {
        value: /^[0-9]{6}$/,
        message: 'PIN Code must be 6 digits'
      }
    }
  }
};
