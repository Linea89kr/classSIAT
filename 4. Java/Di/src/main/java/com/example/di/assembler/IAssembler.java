package com.example.di.assembler;

import com.example.di.service.IMemberInterface;
import com.example.di.service.IMemberServiceImpl;

public class IAssembler {
    IMemberInterface service;
    public IAssembler(){
        this.service = new IMemberServiceImpl();
    }
    public IMemberInterface getService(){
        return service;
    }
}
