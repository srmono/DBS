package com.dbs.orderservice.model;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class OrderRequest {
	private String message;
	private String identifier;
}
