package com.bv.fn.accounts

class Role {

	String authority

	static mapping = {
		cache true
	}

	static constraints = {
		authority blank: false, unique: true
	}

    String toString(){
        return authority
    }
}
